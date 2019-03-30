export const removeEmptyParamsFromObject = object => {
    let newObject = {};

    Object.keys( object ).forEach( key => {
        if ( object[ key ] ) {
            newObject[ key ] = object[ key ];
        }
    } );

    return newObject;
};

export const generateRandomKey = () => {
    return btoa( String( Math.random() ) ).substring( 0, 12 );
};

export const sumAjaxErrorMessagesToString = ( messages = [] ) => {
    return messages.reduce( ( aggregator, errorMessage ) => {
        if ( typeof errorMessage === 'string' && errorMessage.length ) {
            if ( aggregator.length ) {
                return aggregator + '. ' + errorMessage;
            } else {
                return aggregator + errorMessage;
            }
        }
        return aggregator;
    }, '' );
};
