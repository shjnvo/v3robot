class Report < ApplicationRecord

  before_save :set_uuid

  has_one_attached :original
  has_one_attached :promotion
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
    Page.last.list_items.open { |file| Roo::Spreadsheet.open(file) }
  end

  def perfrom
    weight_items = {}

    promotion_sheet.each(dh: 'ĐƠN HÀNG', item_id: 'Item#', sll: 'Qty') do |promo_hash|
      list_items_sheet.parse.each do |row|
        if row.include?(promo_hash[:item_id])
          item_wei = row[-1].to_f * promo_hash[:sll].to_i
          weight_items[promo_hash[:dh]] = weight_items.key?(promo_hash[:dh]) ? weight_items[promo_hash[:dh]] + item_wei : item_wei
        end
      end
    end

    weight_items
  end

  def get_items_by(dh)
    items = []
    result = []
    promotion_sheet.each(dh: 'ĐƠN HÀNG', item_id: 'Item#', sll: 'Qty') do |p_hash|
      (p_hash[:dh] == dh) ? items << [p_hash[:item_id], p_hash[:sll]] : nil
    end

    data = list_items_sheet.parse

    items.each do |id|
      data.select do |row|
        if row.include?(id[0])
          row.push(id[1])
          result << row
        end
      end
    end

    result
  end
end
