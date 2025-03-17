package expo.modules.configwriter

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoConfigWriterModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoConfigWriter")
  }
}
