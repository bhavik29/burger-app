import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponents, axios) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(axios);

        return (
            <>
                <Modal
                    show={error}
                    modalClosed={clearError}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponents {...props} />
            </>
        )
    }
};

export default withErrorHandler;