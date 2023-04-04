import { Button } from "@components/Button";
import { Container, ModalView, CenteredModal, Title } from "./styles";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  visible: boolean;
  setVisible: (v: boolean) => void;
  message: string;
  isHome?: boolean;
};

export function Alert({ visible, setVisible, message, isHome = false }: Props) {
  const { goBack } = useNavigation();

  function hideModal() {
    if (!isHome) {
      setVisible(false);
      goBack();
    }
  }

  return (
    <Container onPress={hideModal}>
      <Modal
        visible={visible}
        transparent
        onRequestClose={hideModal}
        animationType="slide"
      >
        <CenteredModal>
          <ModalView>
            <Title>{message}</Title>

            <Button title="Ok" onPress={hideModal} />
          </ModalView>
        </CenteredModal>
      </Modal>
    </Container>
  );
}
