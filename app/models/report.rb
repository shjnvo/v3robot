class Report < ApplicationRecord

  before_save :set_uuid

  has_one_attached :original
  has_one_attached :promotion
  has_one_attached :list_items
  has_one_attached :report_detail

  def set_uuid
    random_uuid = SecureRandom.hex(8)
    if Report.exists?(uuid: random_uuid)
      set_uuid
    else
      self.uuid = random_uuid
    end
  end

  def original_sheet
    original.open { |file| Roo::Spreadsheet.open(file) }
  end

  def promotion_sheet
    promotion.open { |file| Roo::Spreadsheet.open(file) }
  end

  def list_items_sheet
    list_items.open { |file| Roo::Spreadsheet.open(file) }
  end

  def perfrom
    weight_items = {}

    promotion_sheet.each(dh: 'ĐƠN HÀNG', item_id: 'Item#') do |promo_hash|
      list_items_sheet.parse.each do |row|
        if row.include?(promo_hash[:item_id])
          weight_items[promo_hash[:dh]] = weight_items.key?(promo_hash[:dh]) ? weight_items[promo_hash[:dh]] + row[-1].to_f : row[-1].to_f
        end
      end
    end

    weight_items
  end

  def get_items_by(dh)
    items = []
    result = []
    promotion_sheet.each(dh: 'ĐƠN HÀNG', item_id: 'Item#') { |p_hash| (p_hash[:dh] == dh) ? items << p_hash[:item_id] : nil }

    data = list_items_sheet.parse

    items.each {|id| data.select {|row| row.include?(id) ? result << row : nil } }
    result
  end
end
