import React, { useEffect, useState } from "react";
import {
  CCard,
  CCol,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
} from "@coreui/react";

const regist_fields = [
  { key: "regist_id", label: "ID" },
  { key: "regist_fullname", label: "Họ và tên" },
  { key: "regist_studentcode", label: "Mã sinh viên" },
  { key: "regist_class", label: "Lớp" },
  { key: "regist_yob", label: "Năm sinh" },
  { key: "regist_gender", label: "Giới tính" },
  { key: "regist_status", label: "Trạng thái" },
  { key: "regist_action", label: "" },
];

const RegistList = () => {
  return (
    <CCol xs="12">
      <CCard style={{ width: "100%" }}>
        <CTable>
          <CTableHead>
            {regist_fields.map((regist) => (
              <>
                <CTableHeaderCell scope="col" key={regist.key}>
                  {regist.label}
                </CTableHeaderCell>
              </>
            ))}
          </CTableHead>
          <CTableBody></CTableBody>
        </CTable>
      </CCard>
    </CCol>
  );
};

export default RegistList;
