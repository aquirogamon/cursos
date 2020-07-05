a = User.find(1)
a.update_attribute(:confirmed_at, "2016-05-05 18:30:15")
User.last.update_attribute(:confirmed_at, "2016-05-05 18:30:15")

InternetInterface.find(34).update_attribute(:deviceindex, "rMPLSPolo1BR02395")

Ppminterfaceinternet.find((Ppminterfaceinternet.last.id)-1).created_at.strftime("%d/%m/%Y %H:%M:%S")

InternetInterface.where(InternetInterface.arel_table[:created_at].gt(InternetInterface.last[:created_at].to_date))

InternetInterface.where(InternetInterface.arel_table[:deviceindex].eq(@internet_interface.deviceindex)).pluck(:created_at, :status).map { |e| [ e[0].strftime("%d-%b"), e[1] ] }

InternetInterface.where(deviceindex: @internet_interface.deviceindex).pluck(:created_at, :status)

InternetInterface.where("status >= 85").group_by_week(:created_at).count

InternetInterface.where("status >= 75 AND status < 85").group_by_week(:created_at).count

InternetInterface.where(deviceindex: "rMPLSPolo1BR02386").pluck(:created_at, :status)

InternetInterface.where("status >= 85").where.not(servicio: "PeerIntFacebook").group_by_week(:created_at).count
InternetInterface.where("status >= 85").where.not(servicio: "PeerIntFacebook").group_by_week(:created_at, format: "Semana %W").count

InternetInterface.last.created_at.strftime("Semana %U|%W") - "Semana 43|44"
InternetInterface.last.created_at.strftime("%d-%b") - "29-Oct"

InternetInterface.maximum(:created_at).to_date
InternetInterface.where(InternetInterface.arel_table[:created_at].gt(InternetInterface.maximum(:created_at).to_date)).order("status DESC")