package net.ellise.calculator.messages;

import java.util.UUID;

public record OperationRequest(UUID equationId, UUID operationId, String operation, double left, double right) {
}
