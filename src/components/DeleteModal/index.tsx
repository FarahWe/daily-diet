import { Button } from "@components/Button";
import {
  Container,
  ModalView,
  CenteredModal,
  Title,
  ButtonContainer,
} from "./styles";
import { Modal as NativeModal } from "react-native";

type Props = {
  visible: boolean;
  setVisible: (v: boolean) => void;
  onConfirm: () => void;
};

export function DeleteModal({ visible, setVisible, onConfirm }: Props) {
  function hideModal() {
    setVisible(false);
  }

  return (
    <Container>
      <NativeModal
        visible={visible}
        transparent
        onRequestClose={hideModal}
        animationType="slide"
      >
        <CenteredModal>
          <ModalView>
            <Title>Deseja realmente excluir o registro da refeição?</Title>

            <ButtonContainer>
              <Button
                title="Cancelar"
                variant="secondary"
                onPress={hideModal}
                style={{ marginRight: 12 }}
              />

              <Button title="Sim, excluir" onPress={onConfirm} />
            </ButtonContainer>
          </ModalView>
        </CenteredModal>
      </NativeModal>
    </Container>
  );
}
