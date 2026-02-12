const configAbility = {
  "fileName": "4035011_Monster_W4_IronTombCore_Main_Ability08_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"144377800\">W4_IronTombCore_RemoveBreakEffect</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Irontomb: Cyrene's Demiurge}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-385769957\">MEnemy_W4_IronTombCore_Main_CharacterForceVisible</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_QTE_Progress",
      "value": {
        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__106) || RETURN",
        "displayLines": "ENEMIES_OBJECT_UNUSED__106",
        "constants": [],
        "variables": [
          "ENEMIES_OBJECT_UNUSED__106"
        ]
      }
    },
    {
      "name": "Set IronTomb Progress",
      "display": {
        "operator": "Variables[0] (#CL_QTE_Progress) || RETURN",
        "displayLines": "#CL_QTE_Progress",
        "constants": [],
        "variables": [
          "#CL_QTE_Progress"
        ]
      },
      "mode": "QTE"
    },
    {
      "name": "Set IronTomb Progress",
      "display": 80,
      "duration": 8,
      "mode": "QTE"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_QTE_Progress",
      "value": 80
    },
    {
      "name": "Set IronTomb Progress",
      "display": 95,
      "duration": 2.5,
      "mode": "QTE"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_QTE_Progress",
      "value": 95
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_IronTombCore_Main_Ability083_Part01",
      "isTrigger": true
    },
    "Quick-Time-Event"
  ],
  "references": []
}