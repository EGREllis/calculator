package net.ellise.calculator.messages;

import java.util.UUID;

public record OperationResponse(UUID equationId, UUID operationId, String operation, double left, double right, double result, String error) {
}
