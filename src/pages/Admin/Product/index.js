import { useReducer, useEffect, useState } from 'react';
import { formatNumber } from '../../../hooks/useFormat';
import { useDispatch } from 'react-redux';
import { addToastMessage } from '../../../redux/actions/toastMessage';
import { initValue, reducer } from '../useReducer';
import productApi from '../../../api/product/productApi';

import Loading from './loading';
import ModalConfirm from '../Components/ModalConfirm';
import ViewProduct from './ViewProduct';
import PathAdmin from '../Components/Path';
import Title from '../Components/Title';
import Button from '../../../components/Button';
import ActionBox from '../Components/ActionBox';
import TableContainer from '../Components/TableContainer';
import Form from './Form';
import Pagination from '../../../components/Pagination';

import style from './Product.module.css';

function QlProduct() {
    const _dispatch = useDispatch();
    const [state, dispatch] = useReducer(reducer, initValue);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');
    const [maxItem, setMaxItem] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalView, setShowModalView] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [payload, setPayload] = useState({
        limit: 5,
        page: 1,
        status: '',
    });
    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                const response = await productApi.get(payload);
                setProducts(response[0].data);
                setMaxItem(response[0].max);
                setLoading(false);
                if (response[0].data.length < 1 && payload.page > 1) {
                    setPayload({ ...payload, page: payload.page - 1 });
                }
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [payload]);
    const productView = (id) => {
        const data = products.filter((item) => item.id === id);
        setProduct(data[0]);
        setShowModalView(true);
    };
    const handleUpdate = (id) => {
        const data = products.filter((item) => item.id === id);
        setProduct(data[0]);
        dispatch('form_update');
    };
    const deleteProduct = async (id) => {
        try {
            const _payload = { id: id };
            const response = await productApi.deleteById(_payload);
            _dispatch(addToastMessage(response[0].status, response[0].message));
            if (response[0].status === 'success') {
                setPayload({ ...payload });
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteProduct = (id) => {
        setShowModal(true);
        setDeleteId(id);
    };
    return (
        <>
            <PathAdmin list={[{ _name: 'S???n ph???m', path: '/admin/san_pham' }]} />
            {showModalView && <ViewProduct data={product} showModal={setShowModalView} />}
            {showModal && (
                <ModalConfirm
                    text={'B???n c?? ch???c mu???n x??a?'}
                    showModal={setShowModal}
                    confirm={() => {
                        deleteProduct(deleteId);
                    }}
                />
            )}
            <div className={style.wapper}>
                <Title title={' Qu???n l?? s???n ph???m'} />
                <div className={style.btn}>
                    <Button
                        blueAdmin
                        icon={'fa-solid fa-plus'}
                        onClick={() => {
                            dispatch('form_add');
                        }}
                    >
                        Th??m m???i
                    </Button>
                </div>
                {state.openForm && (
                    <Form
                        type={state.typeForm}
                        onClick={() => {
                            dispatch('close_form');
                        }}
                        data={product}
                        payload={payload}
                        setPayload={setPayload}
                    />
                )}
                <ActionBox
                    placeholder={'T??m ki???m s???n ph???m theo t??n'}
                    options={[
                        { name: 'C??n h??ng', value: '0' },
                        { name: 'H???t h??ng', value: '1' },
                    ]}
                    payload={payload}
                    setPayload={setPayload}
                    loading={isLoading}
                />
                <TableContainer>
                    <table>
                        <tbody>
                            <tr>
                                <th>#</th>
                                <th>T??n s???n ph???m</th>
                                <th>Lo???i s???n ph???m</th>
                                <th>Nh??n h??ng</th>
                                <th>H??nh ???nh</th>
                                <th>Gi??</th>
                                <th>Tr???ng th??i</th>
                                <th>Thao t??c</th>
                            </tr>
                            {isLoading ? (
                                <Loading count={5} />
                            ) : (
                                products.length > 0 &&
                                products.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{(payload.page - 1) * payload.limit + index + 1}</td>
                                            <td>
                                                <span>{item.name}</span>
                                            </td>
                                            <td>{item.category}</td>
                                            <td>
                                                <img
                                                    src={`${process.env.REACT_APP_API_URL}/assets/category/${item.brand}`}
                                                    alt=""
                                                />
                                            </td>
                                            <td>
                                                <img
                                                    src={`${process.env.REACT_APP_API_URL}/assets/products/${item.img}`}
                                                    alt=""
                                                />
                                            </td>
                                            <td>{formatNumber(item.price)}???</td>
                                            <td>
                                                {item.qty > 0 ? (
                                                    <strong className="txt-success">c??n h??ng</strong>
                                                ) : (
                                                    <strong className="txt-error">h???t h??ng</strong>
                                                )}
                                            </td>
                                            <td>
                                                <Button
                                                    small1
                                                    transparent
                                                    onClick={() => {
                                                        productView(item.id);
                                                    }}
                                                >
                                                    <label>
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span>xem</span>
                                                    </label>
                                                </Button>
                                                <Button
                                                    small1
                                                    transparent
                                                    onClick={() => {
                                                        handleUpdate(item.id);
                                                    }}
                                                >
                                                    <label>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                        <span>x???a</span>
                                                    </label>
                                                </Button>
                                                <Button
                                                    small1
                                                    transparent
                                                    onClick={() => {
                                                        handleDeleteProduct(item.id);
                                                    }}
                                                >
                                                    <label>
                                                        <i className="fa-solid fa-trash-can"></i>
                                                        <span>x??a</span>
                                                    </label>
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </TableContainer>
                {maxItem > payload.limit && <Pagination payload={payload} setPayload={setPayload} maxItem={maxItem} />}
            </div>
        </>
    );
}

export default QlProduct;
