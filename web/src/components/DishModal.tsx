import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import Modal from 'react-modal';
import ModalContext from './modalContext';

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
    } catch (err) {
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
    } catch (err) {
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

  function submit(e: FormEvent) {
    e.preventDefault();

    if (addVisible) {
      dishCreate();
      closeAddModal();
    } else {
      dishUpdate();
      closeEditModal();
    }
    window.location.reload();
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
                  pattern="/\d+/"
                  name="calories"
                  required
                  onChange={(e) => {
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
                  pattern="/\d+/"
                  name="price"
                  required
                  onChange={(e) => {
                    setPrice((e.target.value as unknown) as number);
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
