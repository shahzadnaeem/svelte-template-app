
export function timeSince(dateString)
{
    const date = new Date(dateString)

    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return intervalToAgoString( interval, " year" );
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return intervalToAgoString( interval, " month" );
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return intervalToAgoString( interval, " day" );
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return intervalToAgoString( interval, " hour" );
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return intervalToAgoString( interval, " minute" );
    }

    interval = Math.floor( seconds )
    if ( interval === 0 ) {
        return 'right now'
    }
    
    return intervalToAgoString( Math.floor(seconds), " second" );
}

function intervalToAgoString( interval, unit )
{
    if ( !interval || interval > 1 ) {
        return interval + " " + unit + 's' + ' ago'
    } else {
        return interval + " " + unit + ' ago'
    }
}
