def key
user = "reportkpi"
password = "Cl4r0peru51"
url = "http://172.19.216.90/api/v2/authentication/signin?nmsLogin=false"
headers = {
  :content_type => "application/json"
  }
user = {
  "name": "reportkpi",
  "password": "Cl4r0peru51"
}

data = RestClient::Request.execute(
  :user => user,
  :password => password,
  :url => url, 
  :method => :post, 
  :payload => user.to_json,
  :headers => headers,
  :verify_ssl => false
)
return JSON.load(data)['token']
end

def device_sevone
user = "reportkpi"
password = "Cl4r0peru51"
url = "http://172.19.216.90/api/v2/devices?page=0&size=10000&includeCount=true"

headers = {
  :content_type => "application/json",
  :"X-AUTH-TOKEN" => key
  }

data = RestClient::Request.execute(
  :user => user,
  :password => password,
  :url => url, 
  :method => :get, 
  :headers => headers,
  :verify_ssl => false
)
data_parsed = JSON.load(data)
return data_parsed['content']
end

def device
table = Array.new []
device_sevone.each do |device|
  id_device = device["id"]
  vcx = device["name"]
  numElements = device["numElements"]
  hash = Hash[id_device: id_device, vcx: vcx, numElements: numElements]
  table << hash
end
return table
end


def object_group_sevone
user = "reportkpi"
password = "Cl4r0peru51"
url = "http://172.19.216.90/api/v2/objectgroups?includeMembers=false&localOnly=false&page=0&size=10000"

headers = {
  :content_type => "application/json",
  :"X-AUTH-TOKEN" => key
  }

data = RestClient::Request.execute(
  :user => user,
  :password => password,
  :url => url, 
  :method => :get, 
  :headers => headers,
  :verify_ssl => false
)
data_parsed = JSON.load(data)
return data_parsed['content']
end
def object_group
table = Array.new []
object_group_sevone.each do |object|
  id_object_group = object["id"]
  object_group = object["name"]
  parentId = object["parentId"]
  hash = Hash[object_group: object_group, parentId: parentId, id_object_group: id_object_group]
  table << hash
end
return table
end

def object_sevone(id_device)
id_device = id_device.to_s
user = "reportkpi"
password = "Cl4r0peru51"
url = "http://172.19.216.90/api/v2/devices/" + id_device + "/objects?includeIndicators=false&includeExtendedInfo=true&page=0&size=10000"

headers = {
  :content_type => "application/json",
  :"X-AUTH-TOKEN" => key
  }

data = RestClient::Request.execute(
  :user => user,
  :password => password,
  :url => url, 
  :method => :get, 
  :headers => headers,
  :verify_ssl => false
)
data_parsed = JSON.load(data)
return data_parsed['content']
end
def object_all
table_all_object = Array.new []
device.each do |device_id|
id_device = device_id[:id_device]
vcx = device_id[:vcx]
table_object = object_sevone(id_device)
table_object.map do |objectid|
id_object = objectid["id"]
deviceId = objectid["deviceId"]
object_name = objectid["name"]
vcx_idobject = deviceId.to_s + "_" + id_object.to_s
hash = Hash[id_object: id_object, deviceId: deviceId, object_name: object_name, id_device: id_device, vcx: vcx, vcx_idobject: vcx_idobject]
table_all_object << hash
end
end
return table_all_object.sort! { |a,b| b[:object_name] <=> a[:object_name] }
end

def add_object_to_group
array_object_all = object_all.select{|object_id| object_id[:object_name].exclude?("4G") and object_id[:object_name].include?("AN0")}
array_object_all.each do |objectid|

user = "reportkpi"
password = "Cl4r0peru51"
url = "http://172.19.216.90/api/v2/objectgroups/89/members"

headers = {
  :content_type => "application/json",
  :"X-AUTH-TOKEN" => key
  }

payload = {
  "deviceId": objectid[:deviceId],
  "objectId": objectid[:id_object]
  }

data = RestClient::Request.execute(
  :user => user,
  :password => password,
  :url => url, 
  :method => :post, 
  :headers => headers,
  :payload => payload.to_json,
  :verify_ssl => false
)
end
end
add_object_to_group
