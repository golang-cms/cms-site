# curl
```
curl -s --user 'api:f38bcba5431b68d23b2a75651a35d601-9776af14-9284c10f' \
         https://api.mailgun.net/v3/sandbox2482194c01714c8ba718b7baf71ee81f.mailgun.org/messages \
         -F from='smartcodee  <info@smartcodee.com>' \
         -F to='smartcodee <tongzhumtl@gmail.com>' \
         -F subject='Hello smartcodee' \
         -F text='Congratulations smartcodee, you just sent an email with Mailgun!  You are truly awesome!'


curl -s --user 'api:f38bcba5431b68d23b2a75651a35d601-9776af14-9284c10f' \
	 https://api.mailgun.net/v3/sandbox2482194c01714c8ba718b7baf71ee81f.mailgun.org/messages \
	 -F from='Mailgun Sandbox <postmaster@sandbox2482194c01714c8ba718b7baf71ee81f.mailgun.org>' \
	 -F to='smartcodee <tong.zhou@smartcodee.com>' \
	 -F subject='Hello smartcodee' \
	 -F text='Congratulations smartcodee, you just sent an email with Mailgun!  You are truly awesome!'