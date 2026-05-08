const configAbility = {
  "fileName": "Cyrene_LocalPlayer_Cyrene_Revert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Set LoadState with Animation",
      "failed": [
        "Deleted bullshit",
        "Deleted bullshit"
      ]
    },
    {
      "name": "Set Mapping Point",
      "point": "CameraRoot",
      "reset": true
    },
    {
      "name": "Set Mapping Point",
      "point": "CameraRootSpine",
      "reset": true
    }
  ],
  "onAbortReg": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>",
      "valuePerStack": {
        "_SpecifiedState": 1
      }
    }
  ],
  "references": [],
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}