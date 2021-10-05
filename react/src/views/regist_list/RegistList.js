import React, { useEffect, useState } from "react"
import DataTable from 'react-data-table-component'
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CBadge
} from "@coreui/react";
import axios from "axios";

const marginButton = {
  marginRight: "0.5rem"
}

const fetchRegistListApi = async () => {
  const res = await axios.get("/Voicekid/api/get-regist-list");
  return res.data;
};

const deleteRegistApi = async (id) => {
  await axios.post("/Voicekid/api/deleteRegist", {id})
}

const changeStatusApi = async (id, isConfirmed) => {
  await axios.post("/Voicekid/api/changeStatus", {id, isConfirmed})
}

const RegistList = () => {
  const [registList, setRegistList] = useState([])
  const [reload, setReload] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [currentId, setCurrentId] = useState(0)

  const columns = [
    {
      name: 'STT',
      selector: (row, index) => index + 1
    },
    {
      name: 'Tên phụ huynh',
      selector: row => row.parent_name
    },
    {
      name: 'Số điện thoại',
      selector: row => row.telephone
    },
    {
      name: 'Địa chỉ',
      selector: row => row.address
    },
    {
      name: 'Email',
      selector: row => row.email
    },
    {
      name: 'Trạng thái',
      selector: row => (
        <>
          <CBadge color={row.isConfirmed ? 'primary': 'danger' } onClick={() => handleChangeStatus(row.id, row.isConfirmed)}>{row.isConfirmed ? "Đã đọc" : "Chưa đọc"}</CBadge>
        </>
      )
    },
    {
      name: 'Tùy chọn',
      selector: (row, index) => {
        return (
          <>
            <CButton color="primary" style={marginButton} onClick={() => handleClickEditBtn(row.id)}>Sửa</CButton>
            <CButton color="danger" variant="outline" onClick={() => handleClickDeleteBtn(row.id)}>Xóa</CButton>
          </>
        )
      }
    }
  ];

  const getRegistList = async () => {
    try {
      const rs = await fetchRegistListApi();
      if (rs.status === true) {
        const listRegist = rs.data;
        setRegistList(listRegist);
      } else {
        alert("Tải dữ liệu thất bại!");
      }
    } catch (e) { }
  };

  useEffect(() => {
    getRegistList();
    console.log(registList);
  }, [reload]);

  const handleClickDeleteBtn = async (id) => {
    setShowDeleteModal(true)
    setCurrentId(id)
  }

  const deleteRegist = async () => {
    await deleteRegistApi(currentId)
    setCurrentId(0)
    setShowDeleteModal(false)
    setReload(!reload)
  }

  const handleChangeStatus = async (id, isConfirmed) => {
    await changeStatusApi(id, isConfirmed)
    setReload(!reload)
  }

  return (
    <CCol xs="12">
      <CCard>
        <CCardHeader>
          <h4>Danh sách đăng ký form</h4>
        </CCardHeader>
        <CCardBody>
          <DataTable
            striped
            highlightOnHover
            pagination
            responsive
            columns={columns}
            data={registList}
          />
        </CCardBody>
      </CCard>

      <CModal
        visible={showDeleteModal}
        onDismiss={() => setShowDeleteModal(false)}
        backdrop="static"
      >
        <CModalHeader>
          <CModalTitle>Bạn có chắc muốn xóa đăng ký này?</CModalTitle>
        </CModalHeader>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setShowDeleteModal(false)}>Bỏ qua</CButton>
          <CButton color="danger" variant="outline" onClick={() => deleteRegist()}>Xóa</CButton>
        </CModalFooter>
      </CModal>
    </CCol>
  );
};

export default RegistList;
