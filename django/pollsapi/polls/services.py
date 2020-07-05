from django.shortcuts import render
import requests


def get_geoip(ip_address):
    response = requests.get('https://freegeoip.app/json/%s' % ip_address)
    geodata = response.json()
    geo_ip_detail = {
        'ip': geodata['ip'],
        'country': geodata['country_name'],
        'latitude': geodata['latitude'],
        'longitude': geodata['longitude'],
        'api_key': 'AIzaSyBenvORIWrTLtuVoPMMWjJMBvWnIYygSUM'
    }
