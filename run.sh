#!/bin/sh -e

RUNMODE="${1:-start}"

if [ "${RUNMODE}" = "check" ]; then
    dockerize -template /etc/nginx/nginx.tpl.conf:/etc/nginx/nginx.conf
    /usr/sbin/nginx -t
    rm /etc/nginx/nginx.conf
else
    echo "Starting jibrel-website service, version: `cat /app/version.txt` on node `hostname`"

    # TODO: remove this script, looks like it is not used anymore
    for envvar in GTM_ID; do
        if [ $(eval echo "\$${envvar}") ]; then
            echo "Setting ${envvar} to $(eval echo "\$${envvar}")"
            find /app -type f -name '*.html' -print0 | xargs -0 sed -i -- "s/\[__${envvar}__\]/$(eval echo "\$${envvar}")/g"
        fi
    done

    dockerize -template /etc/nginx/nginx.tpl.conf:/etc/nginx/nginx.conf
    echo "Ready"

    exec /usr/sbin/nginx
fi
