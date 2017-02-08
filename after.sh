cd /vagrant
cp -n .env.example .env
php artisan migrate
php artisan db:seed
