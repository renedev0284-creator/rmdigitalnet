# Use the requested post image when it exists, otherwise keep a valid fallback.
Jekyll::Hooks.register :posts, :pre_render do |post|
  planned_image = post.data["planned_image"]
  next unless planned_image

  relative_path = planned_image.sub(%r{\A/}, "")
  source_path = File.join(post.site.source, relative_path)

  if File.file?(source_path)
    post.data["image"] = planned_image
    post.data["image_alt"] = post.data["planned_image_alt"]
  else
    post.data["image"] = post.site.config["default_social_image"]
    post.data["image_alt"] = post.site.config["default_social_image_alt"]
  end
end
