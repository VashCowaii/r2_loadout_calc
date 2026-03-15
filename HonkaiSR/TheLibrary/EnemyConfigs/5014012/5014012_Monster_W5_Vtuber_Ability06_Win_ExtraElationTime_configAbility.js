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
          "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
          "displayLines": "{[Skill06[4]]}",
          "constants": [],
          "variables": [
            "{[Skill06[4]]}"
          ]
        },
        "TryStartElationTime_ElationTimeIsNoConsume": 1
      }
    }
  ],
  "references": []
}