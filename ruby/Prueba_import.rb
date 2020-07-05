require 'csv'

namespace :import do
	desc "Import internet_interface from CSV"

	task internet_interface: :environment do
		filename = File.join Rails.root, "interfaceinternet.csv"
		CSV.foreach(filename) do |row|
			device, port, servicio, egressRate, neighbor, last_bps_max, last_status, bps_max, status, crecimiento, comment, time, deviceindex, gbpsrx, gbpstx, created_at = row
			InternetInterface.create(device: device, port: port, servicio: servicio, egressRate: egressRate, neighbor: neighbor, last_bps_max: last_bps_max, last_status: last_status, bps_max: bps_max, status: status, crecimiento: crecimiento, comment: comment, time: time, deviceindex: deviceindex, gbpsrx: gbpsrx, gbpstx: gbpstx, created_at: created_at)
		end
	end
end

namespace :import do
	desc "Import core_interface from CSV"

	task core_interface: :environment do
		filename = File.join Rails.root, "coreinternet.csv"
		CSV.foreach(filename) do |row|
			device, port, servicio, egressRate, last_bps_max, last_status, bps_max, status, crecimiento, comment, time, deviceindex, gbpsrx, gbpstx, created_at = row
			CoreInterface.create(device: device, port: port, servicio: servicio, egressRate: egressRate, last_bps_max: last_bps_max, last_status: last_status, bps_max: bps_max, status: status, crecimiento: crecimiento, comment: comment, time: time, deviceindex: deviceindex, gbpsrx: gbpsrx, gbpstx: gbpstx, created_at: created_at)
		end
	end
end
