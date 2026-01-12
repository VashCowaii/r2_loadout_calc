const configAbility = {
  "fileName": "Qingque_QingQue_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_BPCoolDown",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_BPCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_CardCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_PropertyValue01",
      "value": {
        "operator": "Variables[0] (0.72) || RETURN",
        "displayLines": "0.72",
        "constants": [],
        "variables": [
          0.72
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_PropertyValue",
      "value": {
        "operator": "Variables[0] (0.72) || RETURN",
        "displayLines": "0.72",
        "constants": [],
        "variables": [
          0.72
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_Wan",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_Tong",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_Tiao",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "QingQue_PassiveCount",
      "valuePerStack": {
        "MDF_PropertyValue01": {
          "operator": "Variables[0] (0.72) || RETURN",
          "displayLines": "0.72",
          "constants": [],
          "variables": [
            0.72
          ]
        }
      }
    }
  ],
  "references": []
}