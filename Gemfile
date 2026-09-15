source "https://rubygems.org"

gem "jekyll", "~> 4.3.4"
gem "base64"
gem "bigdecimal"
gem "csv", "~> 3.3"

# El sitio compila su CSS con el paquete npm "sass" (ver package.json), no con
# Jekyll (assets/css/main.scss está en "exclude" en _config.yml). Fijamos esta
# versión para que jekyll-sass-converter use "sassc" en vez de "sass-embedded",
# que arrastra a google-protobuf y falla al compilar su extensión nativa en
# el entorno de build de Cloudflare (falta el ejecutable de "rake").
gem "jekyll-sass-converter", "~> 2.2"

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Windows y JRuby no incluyen zoneinfo por defecto
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw]
