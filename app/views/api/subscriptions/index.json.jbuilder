@subscriptions.each do |subscription|
  json.set! subscription.id do
    json.set! :subscription_id, subscription.id
    json.partial! 'api/podcasts/podcast', podcast: subscription.podcast
  end
end
