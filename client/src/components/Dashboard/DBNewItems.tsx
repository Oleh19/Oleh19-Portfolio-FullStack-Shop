import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FaCloudUploadAlt, MdDelete } from '../../assets/icons';
import { statuses } from '../../utils/utils';
import Spinner from '../Spinner';
import { storage } from '../../config/firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import {
  AlertActions,
  alertDanger,
  alertNull,
  alertSuccess,
} from '../../store/actions/alertActions';
import { motion } from 'framer-motion';
import { buttonClick } from '../../animations';
import { addNewProduct, getAllProducts } from '../../api';
import { setAllProducts } from '../../store/actions/productActions';

interface InputValueFieldProps {
  type: string;
  placeholder: string;
  stateValue: string | null;
  stateFunction: Dispatch<SetStateAction<string | null>>;
}

interface Status {
  id: number;
  category: string;
  title: string;
}

const DBNewItems: FC = () => {
  const [itemName, setItemName] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number | null>(null);
  const [imageDownloadURL, setImageDownloadURL] = useState<
    string | null | undefined
  >(null);

  const alert = useSelector((state: AlertActions) => state.alert);
  const dispatch = useDispatch();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      const storageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`);
      const blob = new Blob([imageFile]);

      const uploadTask = uploadBytesResumable(storageRef, blob);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (error) => {
          dispatch(alertDanger(`Error: ${error}`));
          setTimeout(() => {
            dispatch(alertNull());
          }, 3000);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageDownloadURL(downloadURL);
            setIsLoading(false);
            setProgress(null);
            dispatch(alertSuccess('Image Uploaded To The Cloud'));
            setTimeout(() => {
              dispatch(alertNull());
            }, 3000);
          });
        }
      );
    }
  };

  const deleteImageFromFirebase = (image: string) => {
    setIsLoading(true);
    const deleteRef = ref(storage, image);
    deleteObject(deleteRef).then(() => {
      setImageDownloadURL(null);
      setIsLoading(false);
      dispatch(alertSuccess('Image Removed From The Cloud'));
      setTimeout(() => {
        dispatch(alertNull());
      }, 3000);
    });
  };

  const submitNewData = () => {
    const data = {
      product_name: itemName,
      product_category: category,
      product_price: price,
      imageURL: imageDownloadURL,
    };
    addNewProduct(data).then((res) => {
      dispatch(alertSuccess('New Item Added'));
      setTimeout(() => {
        dispatch(alertNull());
      }, 3000);
      setImageDownloadURL(null);
      setItemName('');
      setPrice('');
      setCategory('');
    });
    getAllProducts().then((data) => {
      dispatch(setAllProducts(data));
    });
  };

  return (
    <div className="flex items-center justify-center flex-col gap-4 pt-6 px-24 w-full">
      <div className="border border-gray-300 rounded-md p-4 w-full flex flex-col items-center justify-center gap-4">
        <InputValueField
          type="text"
          placeholder="Input Name Here"
          stateValue={itemName}
          stateFunction={setItemName}
        />

        <div className="w-full flex items-center justify-around gap-3 flex-wrap">
          {statuses &&
            statuses.map((data: Status) => (
              <p
                key={data.id}
                onClick={() => setCategory(data.category)}
                className={`px-4 py-3 rounded-md text-xl text-textColor font-semibold cursor-pointer hover:shadow-md border border-gray-200 backdrop-blur-md ${
                  data.category === category
                    ? 'bg-red-600 text-white'
                    : 'bg-transparent'
                }`}
              >
                {data.title}
              </p>
            ))}
        </div>

        <InputValueField
          type="number"
          placeholder="Input Price Here"
          stateValue={price}
          stateFunction={setPrice}
        />

        <div className="w-full bg-card backdrop-blur-md h-370 rounded-md border-2 border-dotted border-gray-300 cursor-pointer">
          {isLoading ? (
            <div className="w-full h-full flex flex-col items-center justify-evenly px-24">
              <Spinner />
              {progress !== null && (
                <div className="w-full flex flex-col items-center justify-center gap-2">
                  <div className="flex justify-between w-full">
                    <span className="text-base font-medium text-textColor">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-textColor">
                      {`${Math.round(progress)}%`}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-red-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
                      style={{
                        width: `${Math.round(progress)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {!imageDownloadURL ? (
                <>
                  <label>
                    <div className="flex flex-col items-center justify-center h-full cursor-pointer">
                      <div className="flex flex-col  justify-center items-center cursor-pointer">
                        <p className="font-bold text-4xl">
                          <FaCloudUploadAlt className="-rotate-0" />
                        </p>
                        <p className="text-lg text-textColor">
                          Click To Upload An Image
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      name="upload-image"
                      accept="image/*"
                      onChange={uploadImage}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative w-full h-full overflow-hidden rounded-md">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      src={imageDownloadURL}
                      className=" w-full h-full object-cover"
                    />

                    <motion.button
                      {...buttonClick}
                      type="button"
                      className="absolute top-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={() => deleteImageFromFirebase(imageDownloadURL)}
                    >
                      <MdDelete className="-rotate-0" />
                    </motion.button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <motion.button
          onClick={submitNewData}
          {...buttonClick}
          className="w-9/12 py-2 rounded-md bg-red-500 text-primary hover:bg-red-600 cursor-pointer "
        >
          Save
        </motion.button>
      </div>
    </div>
  );
};

export const InputValueField: FC<InputValueFieldProps> = ({
  type,
  placeholder,
  stateValue,
  stateFunction,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={stateValue !== null ? stateValue : ''}
        onChange={(e) => stateFunction(e.target.value)}
        className="w-full px-4 py-3 bg-lightOverlay shadow-md outline-none rounded-md border border-gray-200 focus:border-red-700"
      />
    </>
  );
};

export default DBNewItems;
