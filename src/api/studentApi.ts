import { ListParams, ListRespone, Student } from 'models';
import axiosClient from './axoisClient';

const studentApi = {
  getAll(params: ListParams): Promise<ListRespone<Student>> {
    const url = '/students';
    return axiosClient.get(url, { params });
  },

  getByID(id : String): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  
  add(data: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.post(url, data);
  },
  update(data: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.patch(url, data);
  },
  remove(id : String): Promise<ListRespone<Student>> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
