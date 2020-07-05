require 'nokogiri'

points = [[1,2], [3,4]]

builder = Nokogiri::XML::Builder.new do |doc|
	doc.svg xmlns:"http://www.w3.org/2000/svg" do
		points.each do |x,y|
			doc.circle r:3, cx:x, cy:y
		end
	end
end

puts builder.to_xml