import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import Modal from 'react-modal';
import ModalContext from './modalContext';

import swal from 'sweetalert';

import '../styles/components/dishModal.css';

import api from '../services/api';

interface DishModalProps {
  open: boolean;
  title: string;
  button: string;
}

const DishModal: React.FC<DishModalProps> = (props) => {
  const {
    closeAddModal,
    closeEditModal,
    addVisible,
    editVisible,
    dishData,
  } = useContext(ModalContext);

  const [name, setName] = useState(dishData.name);
  const [ingredients, setIngredients] = useState(dishData.ingredients);
  const [price, setPrice] = useState(dishData.price);
  const [calories, setCalories] = useState(dishData.calories);
  const [category, setCategory] = useState(dishData.category);
  const [image, setImage] = useState<File>();
  const [sideDishes, setSideDishes] = useState(dishData.sideDishes);

  useEffect(() => {
    setName(dishData.name);
    setIngredients(dishData.ingredients);
    setPrice(dishData.price);
    setCalories(dishData.calories);
    setCategory(dishData.category);
    setSideDishes(dishData.sideDishes);
  }, [dishData]);

  async function dishUpdate() {
    const data = new FormData();
    data.append('name', name);
    data.append('ingredients', ingredients);
    data.append('price', (price as unknown) as string);
    data.append('calories', (calories as unknown) as string);
    data.append('category', category);
    data.append('image', image as File);
    data.append('sideDishes', sideDishes);

    try {
      await api.put(`dishes/${dishData.id}`, data);
      swal({
        title: 'Informações atualizadas com sucesso',
        icon: 'success',
        buttons: {
          cancel: { visible: false },
          confirm: { visible: true, text: 'Ok' },
        },
      }).then((willConfirm) => {
        if (willConfirm) {
          window.location.reload();
        }
      });
    } catch (err) {
      swal({
        title: 'Não foi possível atualizar as informações do prato',
        text: 'Verifique os dados e tente novamente',
        icon: 'warning',
        timer: 10000,
        dangerMode: true,
        buttons: {
          cancel: { visible: false },
          confirm: { visible: true, text: 'Ok' },
        },
      }).then((willConfirm) => {
        if (willConfirm) {
          window.location.reload();
        }
      });
      console.log(err);
    }
  }

  async function dishCreate() {
    const data = new FormData();
    data.append('name', name);
    data.append('ingredients', ingredients);
    data.append('price', (price as unknown) as string);
    data.append('calories', (calories as unknown) as string);
    data.append('category', category);
    data.append('image', image as File);
    data.append('sideDishes', sideDishes);

    try {
      await api.post(`dishes`, data);
      swal({
        title: 'Prato criado com sucesso',
        icon: 'success',
        buttons: {
          cancel: { visible: false },
          confirm: { visible: true, text: 'Ok' },
        },
      }).then((willConfirm) => {
        if (willConfirm) {
          window.location.reload();
        }
      });
    } catch (err) {
      swal({
        title: 'Não foi possível criar o prato',
        text: 'Verifique os dados e tente novamente',
        icon: 'warning',
        timer: 10000,
        dangerMode: true,
        buttons: {
          cancel: { visible: false },
          confirm: { visible: true, text: 'Ok' },
        },
      }).then((willConfirm) => {
        if (willConfirm) {
          window.location.reload();
        }
      });

      console.log(err);
    }
  }

  function getImage(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const selectedImage = e.target.files;
    setImage(selectedImage[0]);
  }

  function formValidation() {
    if (name === undefined || name === '' || !!+name === true) {
      alert('O campo do nome deve ser preenchido e no formato de texto');
    }
    if (calories === undefined) {
      console.log(calories);
      alert('O campo de calorias deve estar preenchido e no formato numérico');
    }
    if (category === undefined || category === '' || !!+category === true) {
      alert('O campo de categoria deve estar preenchido e no formato de texto');
    }
    if (
      ingredients === undefined ||
      ingredients === '' ||
      !!+ingredients === true
    ) {
      alert(
        'O campo de ingredientes deve estar preenchido e no formato de texto'
      );
    }
    if (price === undefined) {
      alert('O campo de preço deve estar preenchido e no formato númerico');
    } else {
      if (addVisible) {
        if (image === undefined) {
          alert('Uma imagem deve ser anexada ao prato ');
        } else {
          dishCreate();
          closeAddModal();
        }
      } else {
        dishUpdate();
        closeEditModal();
      }
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    formValidation();
  }

  return (
    <div>
      <Modal
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'absolute',
            left: '30%',
            top: '15%',
            bottom: '3%',
            right: '10%',
            background: 'none',
          },
          content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
        isOpen={props.title.includes('Adicionar') ? addVisible : editVisible}
      >
        <div id="modalContent-container">
          <h2>{props.title}</h2>
          <div id="form">
            <form>
              <div id="first-column">
                <label htmlFor="dishName">Nome do prato</label>
                <br />
                <input
                  defaultValue={dishData.name}
                  type="text"
                  name="name"
                  required
                  title="Digite o nome do prato"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <label htmlFor="sideDishes">Acompanhamentos</label>
                <br />
                <input
                  defaultValue={dishData.sideDishes}
                  type="text"
                  name="sideDishes"
                  required
                  title="Digite os acompanhamentos separando por vírgulas"
                  onChange={(e) => {
                    setSideDishes(e.target.value);
                  }}
                />
                <br />
                <label htmlFor="image">Imagem (Url)</label>
                <br />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  title="Anexe uma imagem do prato"
                  style={{
                    backgroundColor: '#FFF',
                  }}
                  onChange={(e) => {
                    getImage(e);
                  }}
                />
                <br />
                <label htmlFor="ingredients">Ingredientes</label>
                <br />
                <textarea
                  defaultValue={dishData.ingredients}
                  name="ingredients"
                  required
                  title="Digite os ingredientes separados por vírgula"
                  onChange={(e) => {
                    setIngredients(e.target.value);
                  }}
                />
                <br />
              </div>
            </form>

            <form>
              <div id="second-column">
                <label htmlFor="calories">Calorias</label>
                <br />
                <input
                  defaultValue={dishData.calories}
                  type="number"
                  name="calories"
                  min="0"
                  required
                  title="Digite as calorias do prato"
                  onChange={(e) => {
                    let caloriesInput = (e.target.value as unknown) as number;
                    if (caloriesInput < 0) {
                      e.target.value = '0';
                    }
                    setCalories((e.target.value as unknown) as number);
                  }}
                />
                <br />
                <label htmlFor="category">Categoria</label>
                <br />
                <input
                  defaultValue={dishData.category}
                  type="text"
                  name="category"
                  required
                  title="Digite a categoria do prato"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <br />
                <label htmlFor="price">Preço</label>
                <br />
                <input
                  defaultValue={dishData.price}
                  type="number"
                  name="price"
                  min="0"
                  required
                  title="Digite o preço do prato"
                  onChange={(e) => {
                    let priceInput = parseFloat(e.target.value);
                    if (priceInput < 0) {
                      e.target.value = '0';
                    }
                    setPrice(parseFloat(e.target.value));
                  }}
                />
                <br />
              </div>
            </form>
          </div>
          <div id="buttons-container">
            <button id="save-button" type="submit" onClick={submit}>
              {props.button}
            </button>
            <button
              id="cancel-button"
              onClick={() => {
                addVisible ? closeAddModal() : closeEditModal();
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DishModal;
