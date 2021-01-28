class ReportsController < ApplicationController
  def index
    @new_report = Report.new
    @new_page = Page.new
    @reports = Report.all
    @page = Page.last
  end

  def show
    @report = Report.find(params[:id])
  end

  def carton
    @report = Report.find(params[:id])
    @weight_items = @report.perfrom
    data_original = @report.original_sheet.parse
    @carton = data_original.select {|row| row.include?(params[:dh])}[0]
    @items = @report.get_items_by(params[:dh])

    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "carton", encoding: 'UTF-8'
      end
    end
  end

  def create
    @new_report = Report.new(report_params)
    if @new_report.save
      redirect_to reports_path
    end
  end

  def upload_list_items
    @new_page = Page.new(list_items_params)
    if @new_page.save
      redirect_to reports_path
    end
  end

  def download
    @report = Report.find(params[:id])
    respond_to do |format|
      format.xlsx
    end
  end

  def picklist
    @report = Report.find(params[:id])
    @data_original = @report.original_sheet.parse

    respond_to do |format|
      format.pdf do
        render pdf: "picklist", encoding: 'UTF-8', page_size: 'A4'
      end
    end
  end

  private

  def report_params
    params.require(:report).permit(:original, :promotion)
  end

  def list_items_params
    params.require(:page).permit(:list_items)
  end
end
