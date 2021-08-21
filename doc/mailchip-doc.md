# Key
key: 4a9dd425c4642bedb70d4d4f2b58c488-us5

# 
  curl -sS -X POST "https://mandrillapp.com/api/1.0/users/ping" \                 
    --header 'Content-Type: application/json' \                                   
    --data-raw '{ "key": "4a9dd425c4642bedb70d4d4f2b58c488-us5" }'  

# Curl send mail
 curl -X POST \                                                          https://mandrillapp.com/api/1.0/messages/send \                               
     -d '{"key":"4a9dd425c4642bedb70d4d4f2b58c488-us5","message":{"html":"","text":"hehhahaha","subject":"asdfsadf","fro    m_email":"tong.zhou@smartcodee.com","from_name":"","to":[{"email":"zt1983811@gmail.com"}],"headers":{},"important":fa    lse,"track_opens":false,"track_clicks":false,"auto_text":false,"auto_html":false,"inline_css":false,"url_strip_qs":fa    lse,"preserve_recipients":false,"view_content_link":false,"bcc_address":"","tracking_domain":"","signing_domain":"","    return_path_domain":"","merge":false,"merge_language":"mailchimp","global_merge_vars":[],"merge_vars":[],"tags":[],"s    ubaccount":"","google_analytics_domains":[],"google_analytics_campaign":"","metadata":{"website":""},"recipient_metad    ata":[],"attachments":[],"images":[]},"async":false,"ip_pool":"","send_at":""}'