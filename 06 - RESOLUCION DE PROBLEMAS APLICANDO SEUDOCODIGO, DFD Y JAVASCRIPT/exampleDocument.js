/**
 * @fileoverview Servicio para manejar procesos relacionados con proveedores.
 * @version 1.0
 * @author Fernando Blanco
 * @copyright Hospital De Especialidades Nuestra Señora De La Paz
 * 
 * Historial:
 * v1.0 - Primera versión del servicio del proveedor.
 */

import axiosInstance from '../../../../Services/serviceInstance';

/** URL base para interactuar con los proveedores en la API. */
const API_URL_ALMACENES = '/v1/proveedores';

/**
 * Servicio para manejar procesos relacionados con proveedores.
 * @namespace proveedorService
 */
const proveedorService = {
  /**
   * Transforma una lista de proveedores en el formato necesario para React Select.
   * @async
   * @param {Array} lista - La lista de proveedores.
   * @returns {Promise<Array>} La lista de proveedores en el formato necesario para React Select.
   */
  transformarLista: async lista => {
    try {
      if (!lista) return [];
      const objetoProveedor = lista.map(component => {
        return {
          label: component.NOMBRES ?? component.RAZON,
          value: component.ID ?? component.ID,
        };
      });

      return objetoProveedor;
    } catch (error) {
      console.error('Error al transformar lista de proveedores:', error);
      return [];
    }
  },

  /**
   * Transforma una lista de proveedores único en el formato necesario para React Select.
   * @async
   * @param {Array} lista - La lista de proveedores.
   * @returns {Promise<Array>} La lista de proveedores en el formato necesario para React Select.
   */
  transformarListaProveedor: async lista => {
    try {
      if (!lista) return [];
      const objetoProveedor = lista.map(component => {
        return {
          label: component.RAZON,
          value: component.ID,
        };
      });

      return objetoProveedor;
    } catch (error) {
      console.error('Error al transformar lista de proveedores:', error);
      return [];
    }
  },

  /**
   * Obtiene todos los proveedores.
   * @async
   * @returns {Promise<Array>} La lista de proveedores.
   */
  traerTodosLosProveedores: async () => {
    try {
      const { data } = await axiosInstance.get(`${API_URL_ALMACENES}`);

      const objetoProveedor = await proveedorService.transformarListaProveedor(data.data);
      return objetoProveedor;
    } catch (error) {
      console.error('Ha ocurrido un error al obtener todos los proveedores:', error);
      return [];
    }
  },

  /**
   * Busca proveedores por texto y llama a un callback con los resultados.
   * @async
   * @param {string} texto - El texto de búsqueda.
   * @param {Function} callback - El callback que recibe los resultados de la búsqueda.
   */
  buscarProveedor: async (texto, callback) => {
    try {
      const { data } = await axiosInstance.get(
        `${API_URL_ALMACENES}?limit=25&filters[filters]=${texto}&filters[filtersCode]=${texto}&filters[codigo]=${texto}`,
      );
      const objetoEncontradoProveedor = await proveedorService.transformarListaProveedor(data.data);
      callback(objetoEncontradoProveedor);
    } catch (error) {
      console.error(`Ha ocurrido un error al buscar proveedores: ${error}`);
    }
  },
};

export default proveedorService;