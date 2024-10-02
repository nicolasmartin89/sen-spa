import "../assets/home.css";
import Task from "../components/Task";
import Logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";

export default function HomeEmpleado() {
  const [tareas, setTareas] = useState([]);

  const [tareasForm, setTareasForm] = useState({
    id: 0,
    name: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    type: null,
    status: null,
  });

  const [findTask, setFindTask] = useState("");

  const spanName = document.getElementById("form-validation-span-name");
  const spanDescription = document.getElementById(
    "form-validation-span-description"
  );
  const spanDuration = document.getElementById("form-validation-span-duration");
  const spanType = document.getElementById("form-validation-span-type");
  const spanStatus = document.getElementById("form-validation-span-status");

  //GET Tareas
  const cargarTareas = async () => {
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTareas(data.tasks);
      })
      .catch((error) => console.error("Error al obtener las tareas:", error));
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const onInputChange = (e) => {
    setTareasForm({ ...tareasForm, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let ban = true;
    if (tareasForm.name.length < 3 || tareasForm.name.length > 20) {
      spanName.style.display = "block";
      ban = false;
    } else {
      spanName.style.display = "none";
    }

    if (tareasForm.description.length < 5 || tareasForm.name.length > 30) {
      spanDescription.style.display = "block";
      ban = false;
    } else {
      spanDescription.style.display = "none";
    }

    if (tareasForm.duration < 1 || tareasForm.duration > 480) {
      spanDuration.style.display = "block";
      ban = false;
    } else {
      spanDuration.style.display = "none";
    }

    if (tareasForm.type === null) {
      spanType.style.display = "block";
      ban = false;
    } else {
      spanType.style.display = "none";
    }

    if (tareasForm.status === null) {
      spanStatus.style.display = "block";
      ban = false;
    } else {
      spanStatus.style.display = "none";
    }

    return ban;
  };

  //POST Tareas
  const onSubmit = async (e) => {
    e.preventDefault();
    const val = validateForm();
    if (val) {
      const newTask = {
        name: tareasForm.name,
        description: tareasForm.description,
        date: tareasForm.date,
        duration: tareasForm.duration,
        time: tareasForm.time,
        type: tareasForm.type,
        status: tareasForm.status,
      };

      fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
        .then((response) => response.json())
        .then(() => {
          cargarTareas();
          setTareasForm({
            id: 0,
            name: "",
            description: "",
            date: "",
            time: "",
            duration: "",
            type: "",
            status: "Por iniciar",
          });
          cargarTareas();
          spanName.style.display = "none";
        })
        .catch((error) => console.error("Error al crear la tarea: ", error));
    } else {
      alert("Verifique los campos del formulario");
    }
  };

  //DELETE Tarea
  const deleteTask = (id) => {
    if (confirm(`¿Esta seguro de que desea eliminar la tarea: ${id}?`)) {
      fetch(`http://localhost:3000/api/tasks/${id}`, { method: "DELETE" })
        .then(() => cargarTareas())
        .catch((error) => console.error("Error al eliminar la tarea: ", error));
    }
  };

  //PUT Tarea
  const putTask = (id) => {
    const taskEdited = {
      name: tareasForm.name,
      description: tareasForm.description,
      date: tareasForm.date,
      duration: tareasForm.duration,
      time: tareasForm.time,
      type: tareasForm.type,
      status: tareasForm.status,
    };
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(taskEdited),
    })
      .then((response) => response.json())
      .then(() => {
        setTareasForm({
          id: 0,
          name: "",
          description: "",
          date: "",
          time: "",
          duration: "",
          type: null,
          status: null,
        });
        cargarTareas();
      })
      .catch((error) => console.error("Error al editar la tarea: ", error));
  };

  
  const initTask = (task) => {
    const taskEdited = {
      name: task.name,
      description: task.description,
      date: task.date,
      duration: task.duration,
      time: task.time,
      type: task.type,
      status: "En progreso"
    };
    fetch(`http://localhost:3000/api/tasks/${task.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(taskEdited),
    })
      .then((response) => response.json())
      .then(() => {
        cargarTareas();
      })
      .catch((error) => console.error("Error al editar la tarea: ", error));
}

  //PATCH Tarea
  const completeTask = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}/complete`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        status: "Completada",
      }),
    })
      .then((response) => response.json())
      .then(() => {
        cargarTareas();
      })
      .catch((error) => console.error("Error al completar la tarea: ", error));
  };

  const cancelTask = (task) => {
      const taskEdited = {
        name: task.name,
        description: task.description,
        date: task.date,
        duration: task.duration,
        time: task.time,
        type: task.type,
        status: "Por iniciar"
      };
      fetch(`http://localhost:3000/api/tasks/${task.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(taskEdited),
      })
        .then((response) => response.json())
        .then(() => {
          cargarTareas();
        })
        .catch((error) => console.error("Error al editar la tarea: ", error));
  }

  //Cargar tarea a editar en el formulario
  const handleEdit = (task) => {
    setTareasForm({
      id: task.id,
      name: task.name,
      description: task.description,
      date: task.date,
      time: task.time,
      duration: task.duration,
      type: task.type,
      status: task.status,
    });
    document.getElementById("boton-cancelar").style.display = "block";
    document.getElementById("boton-guardar").style.display = "block";
    document.getElementById("boton-agregar").style.display = "none";
    document.getElementById("titulo-form").innerHTML = "Editar Tarea";
  };

  //Cancelar edicion de tarea
  const cancelPut = () => {
    setTareasForm({
      id: 0,
      name: "",
      description: "",
      date: "",
      time: "",
      duration: "",
      type: null,
      status: null,
    });
    document.getElementById("boton-agregar").style.display = "block";
    document.getElementById("boton-cancelar").style.display = "none";
    document.getElementById("boton-guardar").style.display = "none";
    document.getElementById("titulo-form").innerHTML = "Agregar Tarea";
  };

  const onFindChange = (e) => {
    setFindTask(e.target.value);
    if (e.target.value.length !== 0) {
      const filterTask = tareas.filter((tarea) => {
        return tarea.name.toLowerCase().startsWith(e.target.value.toLowerCase());
      });
      if (filterTask.length !== 0) {
        setTareas(filterTask);
      } else {
        setTareas([]);
        document.getElementById("msg-alert-find").style.display = "block";
      }
    } else {
      document.getElementById("msg-alert-find").style.display = "none";
      cargarTareas();
    }
  };

  //Filtrar tareas por iniciar
  const tasksForInit = tareas
    .filter((task) => task.status === "Por iniciar")
    .map((taskFilter) => (
      <div key={taskFilter.id} className="task-container">
        <Task
          id={taskFilter.id}
          name={taskFilter.name}
          description={taskFilter.description}
          date={taskFilter.date}
          duration={taskFilter.duration}
          time={taskFilter.time}
          type={taskFilter.type}
          status={taskFilter.status}
        />
        <button id="boton-naranja" onClick={() => handleEdit(taskFilter)}>
          Editar
        </button>
        <button id="boton-rojo" onClick={() => deleteTask(taskFilter.id)}>
          Eliminar
        </button>
        <button id="boton-verde" onClick={() => initTask(taskFilter)}>
          Comenzar
        </button>
      </div>
    ));

  //Filtrar tareas en progreso
  const tasksInProgress = tareas
    .filter((task) => task.status === "En progreso")
    .map((taskFilter) => (
      <div key={taskFilter.id} className="task-container">
        <Task
          id={taskFilter.id}
          name={taskFilter.name}
          description={taskFilter.description}
          date={taskFilter.date}
          duration={taskFilter.duration}
          time={taskFilter.time}
          type={taskFilter.type}
          status={taskFilter.status}
        />
        <button id="boton-naranja" onClick={() => handleEdit(taskFilter)}>
          Editar
        </button>
        <button id="boton-rojo" onClick={() => deleteTask(taskFilter.id)}>
          Eliminar
        </button>
        <button id="boton-verde" onClick={() => completeTask(taskFilter.id)}>
          Completar
        </button>
      </div>
    ));

  //Filtrar tareas completadas
  const completedTasks = tareas
    .filter((task) => task.status === "Completada")
    .map((taskFilter) => (
      <div key={taskFilter.id} className="task-container">
        <Task
          id={taskFilter.id}
          name={taskFilter.name}
          description={taskFilter.description}
          date={taskFilter.date}
          duration={taskFilter.duration}
          time={taskFilter.time}
          type={taskFilter.type}
          status={taskFilter.status}
        />
        <button id="boton-naranja" onClick={() => handleEdit(taskFilter)}>
          Editar
        </button>
        <button id="boton-rojo" onClick={() => deleteTask(taskFilter.id)}>
          Eliminar
        </button>
        <button id="boton-verde" onClick={() => cancelTask(taskFilter)}>
          Deshacer
        </button>
      </div>
    ));

  return (
    <div className="empleadohome-container">
      <nav className="empleadohome-navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo SENSPA" />
          <h3>SenSpa</h3>
        </div>
        <div>
          <span id="inicio">Inicio</span>
          <span>Cerrar</span>
        </div>
      </nav>

      <div className="empleadohome-body">
        <aside className="empleadohome-aside">
          <div>
            <form onSubmit={(e) => onSubmit(e)}>
              <h3 id="titulo-form">Agregar Tarea</h3>

              <input type="hidden" id="id" name="id" value={tareasForm.id} />

              <label htmlFor="titulo">Nombre</label>
              <input
                type="text"
                placeholder="Nombre de la tarea"
                id="name"
                name="name"
                value={tareasForm.name}
                onChange={(e) => onInputChange(e)}
                required
              />
              <span
                className="form-validation-span"
                id="form-validation-span-name"
              >
                <strong>Debe tener entre 3 y 20 Caracteres</strong>
              </span>

              <label htmlFor="t">Descripcion</label>
              <textarea
                rows={5}
                cols={5}
                placeholder="Descripcion"
                id="description"
                name="description"
                value={tareasForm.description}
                onChange={(e) => onInputChange(e)}
                required
              ></textarea>
              <span
                className="form-validation-span"
                id="form-validation-span-description"
              >
                <strong>Debe tener entre 5 y 30 Caracteres</strong>
              </span>

              <label htmlFor="date">Fecha</label>
              <input
                type="date"
                id="date"
                name="date"
                value={tareasForm.date}
                onChange={(e) => onInputChange(e)}
                min={"2024-09-01"}
                max={"2025-12-30"}
                required
              />

              <label htmlFor="time">Hora</label>
              <input
                type="time"
                id="time"
                name="time"
                value={tareasForm.time}
                onChange={(e) => onInputChange(e)}
                min={"07:00:00"}
                max={"19:00:00"}
                required
              />

              <label htmlFor="duration">Duracion (minutos)</label>
              <input
                type="number"
                placeholder="Duracion"
                id="duration"
                name="duration"
                value={tareasForm.duration}
                onChange={(e) => onInputChange(e)}
                required
                min={"1"}
                max={"480"}
              />
              <span
                className="form-validation-span"
                id="form-validation-span-duration"
              >
                <strong>Debe ser entre 1 y 480 minutos</strong>
              </span>

              <label htmlFor="type">Tipo de servicio</label>
              <select
                id="type"
                name="type"
                value={tareasForm.type}
                onChange={(e) => onInputChange(e)}
              >
                <option disabled selected value={null}>
                  Seleccione un servicio
                </option>
                <option value={"Sauna Infrarrojo"}>Sauna Infrarrojo</option>
                <option value={"Aromaterapia"}>Aromaterapia</option>
                <option value={"Terapia con Sal"}>Terapia con Sal</option>
                <option value={"Sauna vapor"}>Sauna Vapor</option>
                <option value={"Limpieza"}>Limpieza</option>
              </select>
              <span
                className="form-validation-span"
                id="form-validation-span-type"
              >
                <strong>Debe seleccionar un tipo de servicio</strong>
              </span>

              <label htmlFor="status">Estado de la tarea</label>
              <select
                id="status"
                name="status"
                value={tareasForm.status}
                onChange={(e) => onInputChange(e)}
              >
                <option disabled selected value={null}>
                  Seleccione una opcion
                </option>
                <option value={"Por iniciar"}>Por iniciar</option>
                <option value={"En progreso"}>En progreso</option>
                <option value={"Completada"}>Completada</option>
              </select>
              <span
                className="form-validation-span"
                id="form-validation-span-status"
              >
                <strong>Debe seleccionar una opcion</strong>
              </span>

              <span id="boton-cancelar" onClick={cancelPut}>
                Cancelar
              </span>
              <span id="boton-guardar" onClick={() => putTask(tareasForm.id)}>
                Guardar
              </span>
              <button id="boton-agregar" type="submit">
                Agregar
              </button>
            </form>
          </div>
        </aside>

        <section className="empleadohome-section">
          <div className="empleadohome-find">
            <input
              type="text"
              placeholder="Buscar"
              onChange={(e) => onFindChange(e)}
            />
          </div>
          <div className="empleadohome-tasks">
            <h2>LISTADO DE TAREAS</h2>
            <div className="empleadohome-task">
              <h3>Por iniciar</h3>
              {tasksForInit}
            </div>
            <div className="empleadohome-task">
              <h3>En progreso</h3>
              {tasksInProgress}
            </div>
            <div className="empleadohome-task">
              <h3>Completadas</h3>
              {completedTasks}
            </div>
            <div id="msg-alert-find">
              No se encontraron tareas con el nombre {findTask}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
