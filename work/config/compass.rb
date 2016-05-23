require 'compass/import-once/activate'
# Require any additional compass plugins here.
# Compass 플러그인 추가
#require 'compass-normalize'
#require 'breakpoint'
#require 'susy'

# CSS 파일 기본 인코딩(Default Encoding) 설정
# Windows에서 한글, 일어, 중국어 등 SCSS 파일을 CSS로 컴파일 시 문자 인코딩 에러가 생길 경우
# 아래 코드를 설정하여 기본 인코딩을 UTF-8로 설정하면 문제가 해결됨.
Encoding.default_external = "utf-8"

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "config/sass"
images_path = "images"
images_dir = "images"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
#output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

sourcemap = true
