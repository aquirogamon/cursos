  def self.key
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

  def self.object_group_detail_sevone(idgroup)
  idgroup = idgroup.to_s
  user = "reportkpi"
  password = "Cl4r0peru51"
  url = "http://172.19.216.90/api/v2/objectgroups/" + idgroup + "?includeMembers=true&localOnly=true"

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
  return data_parsed['members'].sort! { |a,b| a["id"] <=> b["id"] }
  end

  def self.delete_object_to_group(idgroup)
  idgroup = idgroup.to_s
  table = object_group_detail_sevone(idgroup)
  if table != nil
  table.each do |objectid|

  user = "reportkpi"
  password = "Cl4r0peru51"
  url = "http://172.19.216.90/api/v2/objectgroups/" + idgroup + "/members"

  headers = {
    :content_type => "application/json",
    :"X-AUTH-TOKEN" => key
    }

  payload = {
    "deviceId": objectid["deviceId"],
    "objectId": objectid["id"]
    }

  RestClient::Request.execute(
    :user => user,
    :password => password,
    :url => url, 
    :method => :delete, 
    :headers => headers,
    :payload => payload.to_json,
    :verify_ssl => false
  )
  end
  end
  end

  def self.object_group_sevone
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
  return data_parsed['content'].select{|nameobject| nameobject["name"] == "4G"}
  end

  def self.delete_all_object_to_group
  object_group_sevone.each do |group|
    delete_object_to_group(group["id"])
  end
  end

delete_all_object_to_group
