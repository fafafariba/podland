json.array! @podcasts do |podcast|
  json.partial! 'api/podcasts/podcast', podcast: podcast
end
