FROM php:8.0-apache

WORKDIR /var/www/html

COPY . /var/www/html/

RUN apt update && apt install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(mproc) gd \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli
    
EXPOSE 80