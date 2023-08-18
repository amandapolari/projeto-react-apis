/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Image,
} from '@chakra-ui/react';
import images from '../../assets/importImages';

const VerticallyCenter = () => {
    const context = useContext(GlobalContext);
    const { chooseImage, isOpen, onClose } = context;
    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <Image
                        src={
                            chooseImage === 'capture'
                                ? images.capture
                                : images.remove
                        }
                    />
                </ModalContent>
            </Modal>
        </>
    );
};

export default VerticallyCenter;
