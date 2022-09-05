enum Class {

    /**
     * 1XX
     * informational response – the request was received, continuing process
     */
    INFORMATIONAL = 'INFORMATIONAL',

    /**
     * 2XX
     * the request was successfully received, understood, and accepted
     */
    SUCCESSFUL = 'SUCCESSFUL',
    /**
     * 3XX
     * further action needs to be taken in order to complete the request
     */
    REDIRECTION = 'REDIRECTION',
    /**
     * 4XX
     *  the request contains bad syntax or cannot be fulfilled
     */
    CLIENT_ERROR  = 'CLIENT_ERROR',

    /**
     * 5xx
     * the server failed to fulfil an apparently valid request
     */
    SERVER_ERROR  = 'SERVER_ERROR',
}

export default Class;
