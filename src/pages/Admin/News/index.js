import { useReducer, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToastMessage } from '../../../redux/actions/toastMessage';
import { initValue, reducer } from '../useReducer';
import newsApi from '../../../api/news/news';

import PathAdmin from '../Components/Path';
import Title from '../Components/Title';
import Button from '../../../components/Button';
import Form from './Form';
import ActionBox from '../Components/ActionBox';
import TableContainer from '../Components/TableContainer';
import Pagination from '../../../components/Pagination';
import ModalConfirm from '../Components/ModalConfirm';
import ViewNews from './ViewNews';
import Loading from './Loading';

import style from './News.module.css';
function NewsAdmin() {
    const _dispatch = useDispatch();
    const [state, dispatch] = useReducer(reducer, initValue);
    const [ListNews, setListNews] = useState([]);
    const [news, setNews] = useState({});
    const [maxItem, setMaxItem] = useState(0);
    const [deleteId, setDeleteId] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModalView, setShowModalView] = useState(false);
    const [payload, setPayload] = useState({
        limit: 5,
        page: 1,
        status: '',
    });
    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const res = await newsApi.get(payload);
                setListNews(res[0].data);
                setMaxItem(res[0].max);
                setLoading(false);
                if (res[0].data.length < 1 && payload.page > 1) {
                    setPayload({ ...payload, page: payload.page - 1 });
                }
            } catch (error) {
                console.log(error);
            }
        };
        getNews();
    }, [payload]);
    const handleModalView = (id) => {
        const data = ListNews.filter((item) => {
            return item.id === id;
        });
        setNews(data[0]);
        setShowModalView(true);
    };
    const handleUpdate = (id) => {
        const data = ListNews.filter((item) => {
            return item.id === id;
        });
        setNews(data[0]);
        dispatch('form_update');
    };
    const deleteNews = async (id) => {
        try {
            const res = await newsApi.delete({ id: id });
            _dispatch(addToastMessage(res[0].status, res[0].message));
            if (res[0].status === 'success') {
                setPayload({ ...payload });
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleDelete = (id) => {
        setDeleteId(id);
        setShowModal(true);
    };
    return (
        <>
            <PathAdmin list={[{ _name: 'Tin t???c', path: '/admin/tin_tuc' }]} />
            {showModalView && <ViewNews data={news} showModal={setShowModalView} />}
            {showModal && (
                <ModalConfirm
                    text={'B???n c?? ch???c mu???n x??a?'}
                    confirm={() => {
                        deleteNews(deleteId);
                    }}
                    showModal={setShowModal}
                />
            )}
            <div className={style.wapper}>
                <Title title={'Qu???n l?? tin t???c'} />
                <div className={style.btn}>
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
                            data={news}
                            payload={payload}
                            setPayload={setPayload}
                        />
                    )}
                    <ActionBox
                        placeholder={'T??m ki???m tin t???c...'}
                        options={[
                            { name: 'Hi???n th???', value: '0' },
                            { name: '??ang ???n', value: '1' },
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
                                    <th>Ti??u ?????</th>
                                    <th>Danh m???c</th>
                                    <th>H??nh ???nh</th>
                                    <th>Tr???ng th??i</th>
                                    <th>Ng??y t???o</th>
                                    <th>Thao t??c</th>
                                </tr>
                                {isLoading ? (
                                    <Loading count={5} />
                                ) : (
                                    ListNews.length > 0 &&
                                    ListNews.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{(payload.page - 1) * payload.limit + index + 1}</td>
                                                <td>
                                                    <span>{item.title}</span>
                                                </td>
                                                <td>{item.category_name}</td>
                                                <td>
                                                    <img
                                                        src={`${process.env.REACT_APP_API_URL}/assets/news/${item.img}`}
                                                        alt=""
                                                    />
                                                </td>
                                                <td>
                                                    {item.status === '0' ? (
                                                        <span className="txt-success">Hi???n th???</span>
                                                    ) : (
                                                        <span className="txt-error">??ang ???n</span>
                                                    )}
                                                </td>
                                                <td>{item.created}</td>
                                                <td>
                                                    <Button
                                                        small1
                                                        transparent
                                                        onClick={() => {
                                                            handleModalView(item.id);
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
                                                            <span>s???a</span>
                                                        </label>
                                                    </Button>
                                                    <Button
                                                        small1
                                                        transparent
                                                        onClick={() => {
                                                            handleDelete(item.id);
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
                    {maxItem > payload.limit && (
                        <Pagination maxItem={maxItem} payload={payload} setPayload={setPayload} />
                    )}
                </div>
            </div>
        </>
    );
}

export default NewsAdmin;
