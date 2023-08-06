import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../../redux/actions/action";

const Addtocart = () => {
  const [data, setdata] = useState([]);
  console.log(data);
  const { id } = useParams();
  // console.log(id)

  const history = useNavigate();

  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const compare = () => {
    let filterdata = getdata.filter((e) => e.id == id);
    setdata(getdata);
  };
  //add data
  const Send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };
  //use nevigate used for redirect to home page
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/menu");
  };
  useEffect(() => {
    compare();
  }, [id]);

  //for remove one item
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  return (
    <Layout>
      <>
        <div className="container mt-2 " >
          <h2 className="text-center">Items details page</h2>
          <section className="container mt-3">
            <div className="itemdetails">
              {data.map((ele) => {
                return (
                  <>
                    <div className="items_img" style={{ marginBottom: 10 }}>
                      <img src={ele.image} alt="" />
                    </div>
                    <div className="details">
                      <Table  >
                        <tbody key="tbody">
                          <tr>
                            <td>
                              <p>
                                <strong>price</strong>:₹{ele.price}
                              </p>
                              <p>
                                <strong>dishes</strong>:{ele.name}
                              </p>
                              <p>
                                <strong>total</strong>:₹{ele.price * ele.qnty}
                              </p>
                              <div
                                className="mt-5 d-flex justify-content-between align-items-center"
                                style={{
                                  width: 100,
                                  cursor: "pointer",
                                  background: "#ddd",
                                  color: "#111",
                                }}
                              >
                                <span
                                  style={{ fontSize: 24 }}
                                  onClick={
                                    ele.qnty <= 1
                                      ? () => dlt(ele.id)
                                      : () => remove(ele)
                                  }
                                >
                                  -
                                </span>
                                <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                <span
                                  style={{ fontSize: 24 }}
                                  onClick={() => Send(ele)}
                                >
                                  +
                                </span>
                              </div>
                            </td>
                            <td>
                              <p>
                                <strong>Remove :</strong>
                                <DeleteIcon
                                  style={{ color: "red", cursor: "pointer" }}
                                  onClick={() => dlt(ele.id)}
                                />
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
};

export default Addtocart;
