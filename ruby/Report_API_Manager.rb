# Exportamos todos los endpoint creados
def self.all_endpoints
  base_url = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/endpoint"
  data = RestClient::Request.execute(:url => base_url, :method => :get, :verify_ssl => false)
  data_parsed = Hash.from_xml(data)['endpointHeads']['EndpointHead']
  return data_parsed
end

# Exportamos la configuración de un endpoint
def self.id_endpoint(name_endpoint)
  endpoint = '/' + name_endpoint
  base_url = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/endpoint/reflector" + endpoint
  data = RestClient::Request.execute(:url => base_url, :method => :get, :verify_ssl => false)
  data_parsed = Hash.from_xml(data)['Endpoint']
  return data_parsed
end


# Exportamos todos los session creados
def self.all_sessions
  base_url = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/session"
  data = RestClient::Request.execute(:url => base_url, :method => :get, :verify_ssl => false)
  data_parsed = Hash.from_xml(data)['sessionHeads']['SessionHead']
  return data_parsed
end

# Exportamos la configuración de un session
def self.id_session(name_session)
  session = '/' + name_session
  base_url = "https://C14593:Cl4r0peru51!@10.95.230.2/nbapi/session/twamp" + session
  data = RestClient::Request.execute(:url => base_url, :method => :get, :verify_ssl => false)
  data_parsed = Hash.from_xml(data)['TwampSession']
  return data_parsed
end

