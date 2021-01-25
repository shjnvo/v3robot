class ReportsController < ApplicationController
  def index
    @new_report = Report.new
    @reports = Report.all
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

  def download
    @report = Report.find(params[:id])
    respond_to do |format|
      format.xlsx
    end
  end

  private

  def report_params
    params.require(:report).permit(:original, :promotion, :list_items)
  end
end
