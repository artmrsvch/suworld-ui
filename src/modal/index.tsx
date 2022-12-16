import styled from 'styled-components';
import AntdModal from 'antd/lib/modal/index';
import { xs } from '../ui';

export const Modal = styled(AntdModal)`
  .ant-modal-content {
    padding: 30px;
    border-radius: 8px;
  }
  .ant-modal-header {
    border-bottom: none;
    margin-bottom: 20px;
    padding: 0;
  }
  .ant-modal-body {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
  
  .ant-modal-footer {
    display: flex;
    border-top: none;
    padding: 0;
    margin-top: 20px;
    @media (max-width: ${xs}) {
      flex-direction: column;
    }
    .ant-btn {
      height: 30px;
    }
    .ant-btn-primary {
      
      @media (max-width: ${xs}) {
        margin-left: 0;
        margin-top: 15px;
      }
    }
  }
`;
