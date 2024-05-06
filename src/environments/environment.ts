// Copyright 2018 Ping Identity
//
// Licensed under the MIT License (the "License"); you may not use this file
// except in compliance with the License.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { AuthorizationConfig, GeneralEnvironmentInfo } from '../app/authorization_config';

export const environment: AuthorizationConfig & GeneralEnvironmentInfo  = {
  production: false,
  issuer_uri: 'https://localhost:9031',
  client_id: '452f1f93-bb12-4218-801b-2738109c741',
  client_secret: 'aKbPm7ztIFRGzy9Stgs486PARgCQ5N7KUBDm]qtbAA=',
  redirect_uri: 'http://localhost:4200/callback',
  extras: {
    'prompt': 'consent',
    'access_type': 'offline'
  }
};
