const configAbility = {
  "fileName": "5014012_Monster_W5_Vtuber_Ability06_Win_ExtraElationTime",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"101547145\">Elation_StartElationTime</a>",
      "variables": {
        "TryStartElationTime_OverrideElationPoint": {
          "operator": "Variables[0] (TryStartElationTime_OverrideElationPoint) || RETURN",
          "displayLines": "TryStartElationTime_OverrideElationPoint",
          "constants": [],
          "variables": [
            "TryStartElationTime_OverrideElationPoint"
          ]
        },
        "TryStartElationTime_ElationTimeIsNoConsume": 1
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}