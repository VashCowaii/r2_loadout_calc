const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability01_VisualPrepare",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Servant_CyreneServant_FormationReset",
      "isTrigger": true
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_HasBeenInVeiwMode",
      "value": 1
    },
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-668366939\">Servant_CyreneServant_AbilityReady_MirrorSetup</a>"
    }
  ],
  "references": []
}