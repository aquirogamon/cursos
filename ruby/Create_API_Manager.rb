def self.create_endpoint(name_equipo, ip_equipo, type_equipo)

  url_endpoint_create = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/endpoint/reflector"
  url_endpoint_action = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/endpoint/#{name_equipo}/operate"

  headers = {
    :content_type => "application/json"
  }

  if type_equipo == "Huawei"
    data_endpoint_create = {
    	"ip"=>ip_equipo, "name"=>name_equipo, "product"=>"Router", "type"=>"Reflector", "Capabilities"=>{"capability"=>{"cap"=>"twamp-rf"}}
    }
  elsif type_equipo == "Nokia"
    data_endpoint_create = {
      "ip"=>ip_equipo, "name"=>name_equipo, "product"=>"Router", "type"=>"Reflector", "Capabilities"=>{"capability"=>{"cap"=>"twamp-rf"}}, "TwampCp"=>{"address"=>ip_equipo, "legacyMode"=>"0", "tos"=>"184"}
    }
  elsif type_equipo == "Cisco"
    data_endpoint_create = {
      "ip"=>ip_equipo, "name"=>name_equipo, "product"=>"Router", "type"=>"Reflector", "Capabilities"=>{"capability"=>{"cap"=>"twamp-rf"}}, "TwampCp"=>{"address"=>ip_equipo, "legacyMode"=>"0", "tos"=>"184"}
    }
  end

  data_endpoint_action = {
    "action":"resolve"
  }

  RestClient::Request.execute(
    :url => url_endpoint_create, 
    :method => :post, 
    :headers => headers,
    :payload => data_endpoint_create.to_json,
    :verify_ssl => false
  )
  RestClient::Request.execute(
    :url => url_endpoint_action, 
    :method => :put, 
    :headers => headers,
    :payload => data_endpoint_action.to_json,
    :verify_ssl => false
  )
end

def self.devint
  CSV.read(Rails.root + "public/accedian.csv")[1..-1]
end

def self.create_session(name_equipo,actuador_site)

  devint.select{|localidad| localidad[2] == actuador_site}.map{|localidad| 
     @name_session_af12 = localidad[2] + "_" + name_equipo + "_AF12"
     @name_session_ef = localidad[2] + "_" + name_equipo + "_EF"
     @name_accedian = localidad[1]
     @name_sla_af12 = localidad[3] + "_AF12"
     @name_sla_ef = localidad[3] + "_EF"
  }
  url_session_create = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/session/twamp"
  url_session_action_af12 = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/session/#{@name_session_af12}/operate"
  url_session_action_ef = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/session/#{@name_session_ef}/operate"
  url_session_sla_af12 = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/sla/#{@name_sla_af12}/session"
  url_session_sla_ef = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/sla/#{@name_sla_ef}/session"

  headers = {
    :content_type => "application/json"
  }
  data_create_session_af12 = {
    "addressFamily"=>"ipv4", "dstEndpoint"=>name_equipo, "dstIfc"=>"ext0", "dstPort"=>"4001", "interval"=>"60", "name"=>@name_session_af12, "srcEndpoint"=>@name_accedian, "srcIfc"=>"Traffic1", "srcPort"=>"14001", "tos"=>"48", "ttl"=>"255", "Stream"=>{"payloadsize"=>"82", "pps"=>"5.0", "type"=>"UDP"}
  }
  data_create_session_ef = {
    "addressFamily"=>"ipv4", "dstEndpoint"=>name_equipo, "dstIfc"=>"ext0", "dstPort"=>"4002", "interval"=>"60", "name"=>@name_session_ef, "srcEndpoint"=>@name_accedian, "srcIfc"=>"Traffic1", "srcPort"=>"14002", "tos"=>"184", "ttl"=>"255", "Stream"=>{"payloadsize"=>"82", "pps"=>"5.0", "type"=>"UDP"}
  }

  data_session_action = {
    "action":"start"
  }
  data_session_af12 = {
    "name":@name_session_af12
  }
  data_session_ef = {
    "name":@name_session_ef
  }

  RestClient::Request.execute(
    :url => url_session_create, 
    :method => :post, 
    :headers => headers,
    :payload => data_create_session_af12.to_json,
    :verify_ssl => false
  )
  RestClient::Request.execute(
    :url => url_session_create, 
    :method => :post, 
    :headers => headers,
    :payload => data_create_session_ef.to_json,
    :verify_ssl => false
  )

  RestClient::Request.execute(
    :url => url_session_action_af12, 
    :method => :put, 
    :headers => headers,
    :payload => data_session_action.to_json,
    :verify_ssl => false
  )
  RestClient::Request.execute(
    :url => url_session_action_ef, 
    :method => :put, 
    :headers => headers,
    :payload => data_session_action.to_json,
    :verify_ssl => false
  )

  sleep 5

  RestClient::Request.execute(
    :url => url_session_sla_af12, 
    :method => :put, 
    :headers => headers,
    :payload => data_session_af12.to_json,
    :verify_ssl => false
  )
  RestClient::Request.execute(
    :url => url_session_sla_ef, 
    :method => :put, 
    :headers => headers,
    :payload => data_session_ef.to_json,
    :verify_ssl => false
  )
end

def self.create_device
  CSV.read(Rails.root + "public/create_session.csv")
end


def self.new_session
create_device.each do |device|
  create_endpoint(device[0], device[1], device[3])
  create_session(device[0], device[2])
end
end
