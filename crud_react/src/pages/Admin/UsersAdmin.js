import React, {useState, useEffect} from 'react';
import {Loader, Modal} from 'semantic-ui-react';
import {HeaderPage} from "../../components/Admin/HeaderPage/HeaderPage";
import {TableUsers} from "../../components/Admin/Users/TableUsers/TableUsers";
import { ModalBasic} from "../../components/Common/ModalBasic/ModalBasic";
import {AddEditUserForm} from "../../components/Admin/Users/AddEditUserForm/AddEditUserForm"
import {useUser} from "../../hooks";

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const {loading, users, getUsers, deleteUser} = useUser();

  useEffect(() => {getUsers()}, [refetch]);

  const openCloseModal = ()=> setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev)

  const addUser = () =>{
    setTitleModal("Nuevo usuario");
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch}/>);
    openCloseModal();
  };

  const updateUser = (data) => {
    setTitleModal("Actualizar Usuario")
    setContentModal(<AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} user={data}/>)
    openCloseModal();
  }
  const onDeleteUser = async (data) => {
    const result =window.confirm(`¿Estás seguro de eliminar el usuario ${data.email}?`);
    if(result){
      try {
        await deleteUser(data.id);
        onRefetch();
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
      <>
        <HeaderPage 
        title="Usuarios" 
        btnTitle="Nuevo Usuario" 
        btnClick={addUser}
        />
        {loading ? (
            <Loader active inline='centered'>
                Cargando usuarios
            </Loader>
        ) : (
            <TableUsers users ={users} updateUser={updateUser} onDeleteUser={onDeleteUser}/>
        )}
        <ModalBasic 
        show={showModal} 
        onClose={openCloseModal}
        title= {titleModal}
        children={contentModal}
        />
      </>
  )
}