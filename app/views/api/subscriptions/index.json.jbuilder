json.array! @subscriptions do |subscription|
  json.partial! 'api/podcasts/podcast', podcast: subscription
end
