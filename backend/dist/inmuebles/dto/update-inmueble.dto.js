"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInmuebleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_inmueble_dto_1 = require("./create-inmueble.dto");
class UpdateInmuebleDto extends (0, mapped_types_1.PartialType)(create_inmueble_dto_1.CreateInmuebleDto) {
}
exports.UpdateInmuebleDto = UpdateInmuebleDto;
//# sourceMappingURL=update-inmueble.dto.js.map