module ReportsHelper

  def get_items_by(dh, promotion_sheet, list_items_sheet)
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
